import React from 'react';
import Nav from './Nav.js';
import NavItem from './NavItem.js';
import Logo from './Logo.js';
import IconHamburger from './IconHamburger.js';
import navigation from '../util/navigation.js';

const Header = ({ toggleMenu }) => {
  return (
    <header className="shadow-md py-4 px-4 lg:px-16 flex justify-between">
      <Logo>moneyme</Logo>
      <IconHamburger toggleMenu={toggleMenu} />
      <Nav>
        {navigation.map((nav) => (
          <NavItem to={nav.to} key={nav.to}>
            {nav.text}
          </NavItem>
        ))}
      </Nav>
    </header>
  );
};

export default Header;
