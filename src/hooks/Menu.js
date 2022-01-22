import { useState, useEffect } from 'react';

const Menu = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleMenu = () => {
    setHamburger(!hamburger);
  };

  const hideBurger = () => {
    if (window.innerWidth > 768 && hamburger) {
      setHamburger(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', hideBurger);

    return () => {
      window.removeEventListener('resize', hideBurger);
    };
  });

  return { hamburger, toggleMenu };
};

export default Menu;
