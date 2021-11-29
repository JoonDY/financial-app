import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ children }) => {
  return (
    <Link to="/" className="text-3xl font-bold select-none">
      {children}
    </Link>
  );
};

export default Logo;
