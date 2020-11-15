import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContacts, storageContacts } from "./phonebookActions";

// const onAddContact = (state, action) => [...state, action.payload.contacts];
const onAddContact = (state, action) => [...state, action.payload.contacts];

const onDeleteContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const onStorageContacts = (state, action )=> action.payload;

const onFilterContacts = (state, action) => action.payload;


const contacts = createReducer([], {
  [addContact]: onAddContact,
  [deleteContact]: onDeleteContact,
  [storageContacts]: onStorageContacts,
});

const filter = createReducer("", {
  [filterContacts]: onFilterContacts,
});

export default combineReducers({
  contacts,
  filter,
});

//without toolkit

// import {
//   PHONEBOOK_ADD_CONTACT,
//   PHONEBOOK_DELETE_CONTACT,
//   PHONEBOOK_FILTER_CONTACTS,
// } from "./phonebookTypes";

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case PHONEBOOK_ADD_CONTACT:
//       return [...state, payload.contacts];
//     case PHONEBOOK_DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "",  { type, payload }) => {
//     switch(type){
//         case PHONEBOOK_FILTER_CONTACTS:
//             return payload;

//         default:
//             return state;
//     }
// };

// export default combineReducers({
//   contacts,
//   filter,
// });
