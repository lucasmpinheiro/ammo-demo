import React from 'react';
import PaginationItem from './PaginationItem';

const items = ['| <', '<', 1, 2, 3, '>', '> |'];

const currentItem = 2;

const Pagination = () => (
    <ul className='flex list-reset w-auto text-sm text-grey-darker p-2'>
        {items.map(item => <PaginationItem key={item} value={item} active={item === currentItem} />)}
    </ul>
);

export default Pagination;
