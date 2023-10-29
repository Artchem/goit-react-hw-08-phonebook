import AppBar from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Main } from './Layout.styled';

function Layout() {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer></Footer>
      <ToastContainer autoClose={3000} position="top-right" />
    </>
  );
}

export default Layout;
