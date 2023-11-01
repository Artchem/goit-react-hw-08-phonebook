import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import {
  selectContactsItems,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Container, Text } from './Home.styled';

export default function Home() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  // console.log('isLoading :>> ', isLoading);
  const items = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <h2>Contacts</h2>

      <Text>Total contacts: {items.length}</Text>

      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <ToastContainer autoClose={3000} position="top-right" />
    </Container>
  );
}
