import getAllCategories from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from '../Category/SingleCategory';
import wait from '@/utils/wait';
const HomePage =async () => {
    // await wait()

    const categories=await getAllCategories()
    // console.log(categories)
    

//   console.log(posts)
    return (
        <div className='grid grid-cols-3 gap-3 container mx-auto text-center '>
           
           {
            categories.map((category)=> <SingleCategory key={category.id} category={category}></SingleCategory>)
           }
           
        </div>
    );
};

export default HomePage;