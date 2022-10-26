import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Container } from 'components/App/App.styled';
import { Notification } from 'components/Notification';
import { Loader } from 'components/Loader';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title title={'Phonebook'} />
      <ContactForm />
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <Loader />}
        {contacts.length > 0 && <ContactList />}
        {contacts.length === 0 && !isLoading && (
          <Notification message="You don't have contacts yet..." />
        )}
      </Section>
      <ToastContainer autoClose={5000} />
    </Container>
  );
};
