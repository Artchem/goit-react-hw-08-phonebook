import { Container } from './App.styled';
import { lazy, useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { refreshAuth } from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import { selectIsRefreshingUser } from 'redux/auth/authSelectors';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const IsRefreshingUser = useSelector(selectIsRefreshingUser);
  // console.log('IsRefreshingUser :>> ', IsRefreshingUser);

  useEffect(() => {
    dispatch(refreshAuth());
  }, [dispatch]);

  return (
    !IsRefreshingUser && (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <Register />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    )
  );
}
