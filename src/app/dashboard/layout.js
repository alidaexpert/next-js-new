import React from 'react';
import SideBar from './SideBar';

const SideLayout = ({children}) => {
    return (
        <div className='flex container mx-auto '> 
      <SideBar></SideBar>

            {children}
        </div>
    );
};

export default SideLayout;