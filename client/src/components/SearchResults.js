import React from 'react';
import ResultList from './ResultList';

const SearchResults = ({ items }) => (
    <div className='container mx-auto p-4 flex flex-col items-start bg-white h-full' style={{ minWidth: '800px' }}>
        <div className='border-solid border-yellow-dark border-b-4 pb-2 text-sm text-grey-darker uppercase'>
            {items.length > 0
                ? (items.length > 1 ? `${items.length} itens encontrados` : '1 item encontrado')
                : 'Nenhum item encontrado'
            }
        </div>

        <div className='flex flex-col w-full bg-white'>
            <ResultList items={items} />
        </div>

        <hr />

        <div className='flex flex-row w-full justify-between'>
            <div>Dropdown</div>
            <div>pages</div>
        </div>
    </div>
);

export default SearchResults;
