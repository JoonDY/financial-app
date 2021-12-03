import React from 'react';
import NavItem from './NavItem';
import { navigation } from '../util/constants';

const Nav = ({ children }) => {
  return (
    <nav className="hidden md:flex justify-center ">
      <ul className="flex gap-4 items-end text-xs font-bold mt-1">
        {navigation.map((nav) => (
          <NavItem to={nav.to} key={nav.to}>
            {nav.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
