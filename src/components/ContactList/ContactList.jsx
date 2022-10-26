import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import {
  List,
  Item,
  Description,
  Button,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

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
