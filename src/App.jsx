import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';

export const App = () => {
  const {pathname} = useLocation();
  return (
    <>
      <Outlet />
      {pathname !== '/' && <Footer />}
    </>
  )
}

export default App;
