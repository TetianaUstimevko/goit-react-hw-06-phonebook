import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification'
import { addContact, deleteContact, updateFilter, loadContacts } from 'redux/contactsSlice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import s from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    const contact = {
      id: Date.now().toString(),
      name,
      number,
    };

    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(updateFilter(filterValue));
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />

        <h2 className={s.titleContacts}>Contacts</h2>
        <div className={s.allContacts}>All contacts: {contacts.length}</div>

        {contacts.length > 0 ? (
          <>
            <Filter onChange={handleFilterChange} />
            <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
          </>
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </div>
    </PersistGate>
  );
};

export default App;