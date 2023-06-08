import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

axios.defaults.baseURL = "https://647de117af984710854a8696.mockapi.io/contacts";
const headers = { "content-type": "application/json" };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addNewContact = createAsyncThunk(
  "contacts/addNewContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact, {
      headers: headers,
    });
    return data;
  }
);

export const addContactImage = createAsyncThunk(
  "contacts/addContactImage",
  async (image) => {
    const storageRef = ref(storage, `images/${image.name + v4()}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    return url;
  }
);

export const filterByName = createAsyncThunk(
  "contacts/filterByName",
  async (name) => {
    const params = { filter: name };
    const { data } = await axios.get("/contacts", { params });
    return data;
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact) => {
    const { data } = await axios.put(`/contacts/${contact.id}`, contact, {
      headers: headers,
    });

    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
