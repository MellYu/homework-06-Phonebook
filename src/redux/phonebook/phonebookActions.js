//with toolkit
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact',
contact => ({
  payload: {
    contacts: contact,
  }
}));

export const storageContacts = createAction('phonebook/contactStorage');

export const deleteContact = createAction('phonebook/deleteContact');

export const filterContacts = createAction('phonebook/filterContacts');


//Without toolkit

// import { PHONEBOOK_ADD_CONTACT, PHONEBOOK_DELETE_CONTACT, PHONEBOOK_FILTER_CONTACTS } from "./phonebookTypes";


// export const addContact = (contact) => ({
//   type: PHONEBOOK_ADD_CONTACT,
//   payload: {
//     contacts: contact,
//   },
// });

// export const deleteContact = (id) => ({
//     type: PHONEBOOK_DELETE_CONTACT,
//     payload: {
//         id,
//     }
// });

// export const filterContacts = filter =>({
//     type: PHONEBOOK_FILTER_CONTACTS,
//     payload: {
//         filter
//     }
// });

