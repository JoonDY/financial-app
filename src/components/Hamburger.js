import React from 'react';
import { Link } from 'react-router-dom';
import navigation from '../util/navigation';

const Hamburger = ({ toggleMenu }) => {
  return (
    <nav className="flex justify-center items-center lg:hidden">
      <ul className="w-full flex flex-col justify-center gap-2 items-center text-sm font-medium py-3">
        {navigation.map((nav) => (
          <li
            className="w-full justify-center border-b-2 border-gray-300 text-center pb-2 hover:text-pink-400"
            key={nav.to}
          >
            <Link
              className="select-none"
              onClick={() => toggleMenu()}
              to={nav.to}
            >
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Hamburger;
