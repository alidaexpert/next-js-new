"use client"
import Link from 'next/link';
import React from 'react';
import {usePathname} from 'next/navigation';
import className from '@/utils/className';

const NavLinks = ({children,exact = false,href,activeClassName,...props}) => {
    const path=usePathname();
    const active=exact ? path=== href : path.startsWith(href);
    const classes=className(props.className,active && activeClassName);
    if(classes){
        props.className=classes
    }

    return (
        <Link  href={href} {...props}>
            {children}
        
        </Link>
    );
};

export default NavLinks;