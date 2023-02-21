import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DelButton, ListItem } from './ContactItem.styled';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return filteredContacts.map(({ name, number, id }) => (
    <ListItem key={id}>
      <span>{name}: </span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DelButton>
    </ListItem>
  ));
};

ContactItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
