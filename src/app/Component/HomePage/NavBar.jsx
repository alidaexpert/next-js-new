import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';

    const LinksDB= [
      {
        id: 1,
        title: "Home",
        path : "/"
      },
      {
        id: 2,
        title: "Blog",
        path : "/blog"
      },
      {
        id: 3,
        title: "About",
        path : "/about"
      },
      {
        id: 4,
        title: "Contact",
        path : "/contact"
      },
      {
        id: 5,
        title: "Dashboard",
        path : "/dashboard"
      },
    ]
   
const NavBar = () => {

    return (
        <div className="flex justify-between container mx-auto">
           <div>
            <h1 className='text-3xl'>Next Project</h1>
           </div>
           <ul className='flex justify-between '>
            {
                LinksDB.map(({title,path})=>
                <li className='mx-4'>
                  <NavLinks exact activeClassName="text-blue-500" href={path}>{title}</NavLinks>
                  </li>)
            }
           </ul>
        </div>
    );
};

export default NavBar;