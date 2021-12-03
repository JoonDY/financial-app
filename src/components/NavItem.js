import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  return (
    <li className="select-none">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-pink-200'
            : 'border-b-2 border-transparent hover:border-pink-200'
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
