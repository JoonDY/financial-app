import React from 'react';

const IconHamburger = ({ toggleMenu }) => {
  return (
    <div className="md:hidden flex items-center mt-1 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => toggleMenu()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default IconHamburger;
