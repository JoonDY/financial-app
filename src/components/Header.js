import React from 'react';
import Nav from './Nav.js';
import Logo from './Logo.js';
import IconHamburger from './IconHamburger.js';

const Header = ({ toggleMenu }) => {
  return (
    <header className="shadow-md py-4 px-4 md:px-6 lg:px-16 flex justify-between">
      <Logo />
      <IconHamburger toggleMenu={toggleMenu} />
      <Nav />
    </header>
  );
};

export default Header;
