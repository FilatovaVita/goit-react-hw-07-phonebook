import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import {
  PhonebookContainer,
  HeaderTitel,
  SecondTitel,
  DefoltMassege,
} from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getError, getIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookContainer>
      <HeaderTitel>Phonebook</HeaderTitel>
      <ContactForm />

      {contacts.length ? (
        <div>
          <SecondTitel>Contacts</SecondTitel>
          {isLoading && !error && <Loader />}
          <Filter />
        </div>
      ) : (
        <DefoltMassege>
          You dont have contacts! Please, field this Contact Form!
        </DefoltMassege>
      )}
      <ContactList />
    </PhonebookContainer>
  );
};
