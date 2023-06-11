import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = ({  contacts, onDeleteContact }) => {

  const dispatch = useDispatch();
  
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
