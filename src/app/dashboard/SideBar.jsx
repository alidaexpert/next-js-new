import React from 'react';
import NavLinks from '../Component/HomePage/NavLinks';

const sideBars=[
    {
        id:0,
        title:'DashBoard',
        path: "/dashboard"
    },
    {
        id:1,
        title:'Add Product',
        path: "/dashboard/add-product"
    },
    {
        id:2,
        title:'Manage Product',
        path: "/dashboard/manage-product"
    },
    {
        id:2,
        title:'All Product',
        path: "/dashboard/all-products"
    },
    {
        id:3,
        title:'Home',
        path: "/"
    },
  
];
// console.log(sideBars.map({id}=>))

const SideBar = () => {

    return (
        <aside className=' w-1/4'>
            <h1 className='text-2xl text-red-500'>Dashboard</h1>
            <ul>
                {
                    sideBars.map(({id,title,path})=>
<li key={id}>
    <NavLinks exact activeClassName="text-blue-500" href={path}>{title}</NavLinks>
</li>
                    )
                }
            </ul>
        </aside>
    );
};

export default SideBar;