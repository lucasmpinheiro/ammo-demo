import React from 'react';
import PaginationItem from './PaginationItem';

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
    const firstPageNumber = currentPage < 3 ? 0 : currentPage - 2;
    const lastPageNumber = currentPage + 2 > lastPage ? lastPage : currentPage + 2;
    const pageNumbers = Array.from({ length: lastPageNumber - firstPageNumber + 1 }, (v, k) => k + firstPageNumber + 1);

    return (
        <ul className='flex list-reset w-auto text-sm text-grey-darker p-2'>
            <PaginationItem
                value='| <'
                disabled={currentPage === 0}
                onClick={() => onPageChange({ pageNumber: 0 })}
            />
            <PaginationItem
                value='<'
                disabled={currentPage === 0}
                onClick={() => onPageChange({ pageNumber: currentPage - 1 })}
            />

            {pageNumbers.map(item => (
                <PaginationItem
                    key={item}
                    value={item}
                    active={item === currentPage + 1}
                    onClick={() => onPageChange({ pageNumber: item - 1 })}
                />
            ))}

            <PaginationItem
                value='>'
                disabled={currentPage === lastPage}
                onClick={() => onPageChange({ pageNumber: currentPage + 1 })}
            />
            <PaginationItem
                value='> |'
                disabled={currentPage === lastPage}
                onClick={() => onPageChange({ pageNumber: lastPage })}
            />
        </ul>
    );
};

export default Pagination;
