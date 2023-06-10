import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;

export const selectContacts = state => {
  const { contacts, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     list: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.list.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.list = state.list.filter(contact => contact.id !== action.payload);
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;
