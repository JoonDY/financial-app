import React from 'react';

const Nav = ({ children }) => {
  return (
    <nav className="hidden lg:flex justify-center ">
      <ul className="flex flex-col gap-2 items-center lg:flex-row lg:gap-6 text-sm font-medium lg:mt-1">
        {children}
      </ul>
    </nav>
  );
};

export default Nav;
