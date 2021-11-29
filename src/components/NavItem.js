import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  return (
    <li className="border-b-2 border-white hover:border-pink-400">
      <Link className="select-none" to={to}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
