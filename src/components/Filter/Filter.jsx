// Filter.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
// import { createSlice } from '@reduxjs/toolkit';
import { setFilter } from 'redux/contactsSlice';

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

const Filter = ({ onChange }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
    onChange(filterValue);
  };

  return (
    <div>
      <label htmlFor="filter">Filter contacts:</label>
      <input type="text" id="filter" onChange={handleChange} />
    </div>
  );
};

export default Filter;