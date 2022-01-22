import React from 'react';
import { Link } from 'react-router-dom';
import { appName } from '../constants';

const Logo = ({ children }) => {
  return (
    <Link to="/" className="text-3xl font-black select-none">
      {appName.name}
    </Link>
  );
};

export default Logo;
