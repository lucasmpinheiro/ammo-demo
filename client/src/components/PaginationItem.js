import React from 'react';
import classNames from 'classnames';

const PaginationItem = ({ value, active, disabled, onClick }) => {
    const classes = classNames('appearance-none block px-3 py-2', {
        'border rounded px-4': active,
        'cursor-pointer': !active && !disabled,
        'text-grey-light': disabled,
    });
    return (
        <li>
            <a className={classes} onClick={() => !disabled && onClick()}>{value}</a>
        </li>
    );
};

export default PaginationItem;
