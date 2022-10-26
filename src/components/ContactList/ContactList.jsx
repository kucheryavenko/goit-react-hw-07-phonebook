import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import {
  List,
  Item,
  Description,
  Button,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(({ name, phone }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        phone.includes(normalizedFilter);
      return result;
    });
    return visibleContacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <Description>
            {name}: <span>{phone}</span>
          </Description>
          <Button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
