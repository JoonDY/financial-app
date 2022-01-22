import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../constants';

const Hamburger = ({ toggleMenu }) => {
  return (
    <nav className="flex justify-center items-center">
      <ul className="w-full flex flex-col justify-center gap-2 items-center text-xs font-bold py-3">
        {navigation.map((nav) => (
          <li
            className="w-full justify-center border-b-2 border-gray-200 text-center pb-2 hover:text-indigo-200"
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
