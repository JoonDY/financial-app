import Header from './components/Header';
import { Outlet } from 'react-router';
import Hamburger from './components/Hamburger';
import Menu from './hooks/Menu';

function App() {
  const { menu, toggleMenu } = Menu();

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {menu && <Hamburger toggleMenu={toggleMenu} />}
      <Outlet />
    </>
  );
}

export default App;
