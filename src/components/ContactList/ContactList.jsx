import { useSelector } from 'react-redux';
import { Btn, Item } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import {
  getFiltredContacts,
  selectContactsItems,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { delContact } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

function ContactList() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFiltredContacts);
  // console.log('filteredContacts :>> ', filteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      {items.length > 0 &&
        filteredContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn onClick={() => dispatch(delContact(contact.id))} type="button">
              Delete
            </Btn>
          </Item>
        ))}
    </>
  );
}

export default ContactList;
