import wait from '@/utils/wait';
import Link from 'next/link';
import React from 'react';

const SingleCateProduct =async ({product}) => {
    await wait()
    const {id,title,description,price,stock,brand}=product
    return (
        <div className='container  hover:bg-blue-100 hover:text-gray-700 rounded-md transition-colors mx-auto border border-red-500 my-2 p-2'>
            <Link href={`/products/${id}`}>
            <h1 className='text-2xl'>Product No. {id} </h1>
            <h1 className='text-3xl'>Name: {title}</h1>
            <div>
            <p>{description}</p>
           <div className='flex justify-between mx-2 '>
           <small>Price:{price}</small> <small>Stock: {stock}</small> <small>Brand: {brand}</small>
           </div>
            </div>
            </Link>
        </div>
    );
};

export default SingleCateProduct;