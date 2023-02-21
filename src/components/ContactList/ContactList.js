import { useSelector } from "react-redux";
import {getFilteredContacts} from '../../redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ContactListStyled>
        <ContactItem
          filteredContacts={filteredContacts}
        />
    </ContactListStyled>
  );
};

