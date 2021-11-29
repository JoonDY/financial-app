import React from 'react';
import Nav from './Nav.js';
import NavItem from './NavItem.js';
import Logo from './Logo.js';
import IconHamburger from './IconHamburger.js';

const Header = ({ toggleMenu }) => {
  return (
    <header className="shadow-md py-4 px-4 lg:px-16 flex justify-between">
      <Logo>moneyme</Logo>
      <IconHamburger toggleMenu={toggleMenu} />
      <Nav>
        <NavItem to="salary">Salary</NavItem>
        <NavItem to="housing">Housing</NavItem>
        <NavItem to="fire">FIRE</NavItem>
        <NavItem to="rentvbuy">Rent v Buy</NavItem>
      </Nav>
    </header>
  );
};

export default Header;
