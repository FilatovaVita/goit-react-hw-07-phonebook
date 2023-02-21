import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, InputStyle, AddButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+((['`_ -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .number()
    .typeError(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required()
    .positive()
    .integer(),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = { id: nanoid(), name, number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <label>Name</label>
        <InputStyle type="text" name="name" placeholder="Your Name" />
        <ErrorMessage name="name">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <label>Number</label>
        <InputStyle type="tel" name="number" placeholder="Your Phone number" />
        <ErrorMessage name="number">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <AddButton type="submit">Add Contact</AddButton>
      </FormStyled>
    </Formik>
  );
};
