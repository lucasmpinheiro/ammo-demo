import React from 'react';

const formatPrice = value => `R$${value.toFixed(2).replace('.', ',')}`;

const ResultListItem = ({ name, tags, photos, price, discountedPrice }) => (
    <div className='flex flex-col sm:flex-row items-center w-full border-solid border-grey-light border p-1'>
        <div className='w-full sm:w-2/5 flex flex-row flex-wrap min-h-0 max-h-full -m-1'>
            {photos.map((url, i) => (
                <img key={i} alt='' className='w-16 h-16 m-1 min-h-0' src={url} />
            ))}
        </div>

        <div className='w-full sm:w-2/5 flex flex-col py-4 px-1 sm:px-4'>
            <div className='text-base pb-1'>{name}</div>
            <div className='text-sm text-grey-darker font-thin'>{tags.join(', ')}</div>
        </div>

        <div className='w-full sm:w-1/5 text-grey-darker pr-2 text-right'>
            <span className='line-through'>
                {formatPrice(price)}
            </span> por <span className='text-black'>
                {formatPrice(discountedPrice)}
            </span>
        </div>
    </div>
);

export default ResultListItem;
