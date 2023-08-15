import SingleCateProduct from '@/app/Component/Products/SingleCateProduct';
import getAllCateProducts from '@/utils/getAllCateProducts';
import React from 'react';

const page = async ({searchParams}) => {
    const {category}=searchParams;
    const products=await getAllCateProducts(category)
// console.log(products)
    return (
        <div className='grid grid-cols-3 gap-3 container mx-auto'>
            {
                products.map((product)=><SingleCateProduct key={product.id} product={product}></SingleCateProduct>)
            }
        </div>
    );
};

export default page;