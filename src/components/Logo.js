import React from 'react';
import { Link } from 'react-router-dom';
import { appName } from '../constants';

const Logo = ({ children }) => {
  return (
    <Link
      to="/salary"
      className="text-3xl font-black select-none text-green-900"
    >
      {appName.name}
    </Link>
  );
};

export default Logo;
