import React from 'react';
import classNames from 'classnames';

const PaginationItem = ({ value, active }) => {
    const classes = classNames('block px-3 py-2', {
        'border rounded px-4': active,
    });
    return (
        <li>
            <a className={classes}>{value}</a>
        </li>
    );
};

export default PaginationItem;
