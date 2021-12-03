import { useState, useEffect } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router';
import Hamburger from './components/Hamburger';

function App() {
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

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {hamburger && <Hamburger toggleMenu={toggleMenu} />}
      <Outlet />
    </>
  );
}

export default App;
