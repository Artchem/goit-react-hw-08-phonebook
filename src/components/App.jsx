import { Container } from './App.styled';
import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
// import { fetchContacts } from 'redux/contacts/operations';
import { refreshAuth } from 'redux/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAuth());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<div></div>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
}
