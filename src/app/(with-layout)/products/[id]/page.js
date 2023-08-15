import getSingleProduct from '@/utils/getSingleProduct';
import Image from 'next/image';
import React from 'react';
import { images } from '../../../../../next.config';
import wait from '@/utils/wait';

const singleProduct = async ({params}) => {
    await wait()
    const product=await getSingleProduct(params.id)
    const {id,title,description,price,stock,brand,images}=product
    console.log(product)
    return (
        <div className='container mx-auto border flex gap-2 flex-col text-center items-center bg-slate-500 text-white border-red-500 my-2 p-2'>
        <h1 className='text-2xl'>Product No. {id} </h1>
        <h1 className='text-3xl'>Name: {title}</h1>
        <div className='grid grid-cols-3 gap-3 container mx-auto h-64 w-full overflow-hidden' >
            <Image width={500} height={600} src={images[0]}></Image>
        
            <Image width={500} height={600} src={images[1]}></Image>
        
            <Image width={500} height={600} src={images[2]}></Image>
        </div>
        <div>
        <p>{description}</p>
       <div className='flex justify-between mx-2 '>
       <small>Price:{price}</small> <small>Stock: {stock}</small> <small>Brand: {brand}</small>
       </div>
        </div>
    </div>
    );
};

export default singleProduct;