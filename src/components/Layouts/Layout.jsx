import { Outlet } from 'react-router-dom';
import Search from '../Search/Search';

const Layout = () => (
  <>
    <header className="header">
      <Search />
    </header>

    <main className="content">
      <Outlet />
    </main>
  </>
);

export default Layout;
