
import loadDashboardProducts from '@/utils/loadDashboardProducts';
import React from 'react';
import ProductManage from './ProductManage';

const ManageProduct =async () => {
  
  const products= await loadDashboardProducts()



  return (
    <div className='w-screen '>
      <ProductManage products={products}></ProductManage>
    </div>
  );
};

export default ManageProduct;