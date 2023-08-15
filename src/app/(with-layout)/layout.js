import React from 'react';
import NavBar from '../Component/HomePage/NavBar';
import Footer from '../Component/HomePage/Footer';

const RootLayout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
           {children}
           <Footer></Footer>
        </div>
    );
};

export default RootLayout;