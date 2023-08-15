import React from 'react';

const className = (...args) => args.filter(Boolean).join(" ") ;

export default className;