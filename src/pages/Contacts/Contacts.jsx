import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContactsItems,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Container, Text } from './Contacts.styled';

export default function Contacts() {
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
