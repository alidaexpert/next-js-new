import wait from '@/utils/wait';
import Link from 'next/link';
import React from 'react';

const SingleCategory = async({category}) => {
    // await wait()

    const {id,title}=category
    // console.log(id)
    return (
        <div className='container mx-auto rounded-md hover:bg-blue-100 hover:text-red-500 transition-colors border border-red-500 p-2 my-2'>
            <Link href={`/products?category=${id}`}> {title}</Link>
        </div>
    );
};

export default SingleCategory;