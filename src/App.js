import { useState, useEffect } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router';
import Hamburger from './components/Hamburger';

function App() {
  const [hamburger, setHamburger] = useState(false);

  const toggleMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {hamburger && <Hamburger />}
      <Outlet />
    </>
  );
}

export default App;
