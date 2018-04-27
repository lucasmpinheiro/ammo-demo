import React from 'react';

const SearchTerms = ({ filter }) => (
    <div className='bg-grey-light text-grey-darker text-2xl font-hairline w-full p-3'>
        {filter || 'Todos os itens'}
    </div>
);

export default SearchTerms;
