import React from 'react';
import ResultListItem from './ResultListItem';

const ResultList = ({ items }) => (
    <div className='flex flex-col bg-white py-2'>
        {items.map(props => (
            <ResultListItem key={props.id} {...props} />
        ))}
    </div>
);

export default ResultList;
