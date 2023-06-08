import { createSlice } from "@reduxjs/toolkit";

import {
  addNewContact,
  fetchContacts,
  addContactImage,
  filterByName,
  editContact,
  deleteContact,
} from "./contactsThunk";

const initialContactState = {
  contacts: [],
  isLoading: null,
  error: null,
  contact: {
    name: "",
    avatar: "",
    email: "",
    address: "",
    phone: "",
  },
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: initialContactState,
  reducers: {
    setContact(state, action) {
      state.contact = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    [addNewContact.pending]: (state) => {
      state.isLoading = true;
    },
    [addNewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
      state.error = null;
    },
    [addNewContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    [addContactImage.pending]: (state) => {
      state.isLoading = true;
    },
    [addContactImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contact.avatar = action.payload;
      state.error = null;
    },
    [addContactImage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    [filterByName.pending]: (state) => {
      state.isLoading = true;
    },
    [filterByName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [filterByName.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    [editContact.pending]: (state) => {
      state.isLoading = true;
    },
    [editContact.fulfilled]: (state, action) => {
      state.isLoading = false;

      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts[index] = action.payload;
      state.error = null;
    },
    [editContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    [deleteContact.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      state.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const contactActions = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
