import React from 'react';
import NavItem from './NavItem';

const Hamburger = () => {
  return (
    <nav className="flex justify-center items-center lg:hidden">
      <ul className="flex flex-col gap-4 items-center text-md font-medium py-6">
        <NavItem to="salary">Salary</NavItem>
        <NavItem to="housing">Housing</NavItem>
        <NavItem to="fire">FIRE</NavItem>
        <NavItem to="rentvbuy">Rent v Buy</NavItem>
      </ul>
    </nav>
  );
};

export default Hamburger;
