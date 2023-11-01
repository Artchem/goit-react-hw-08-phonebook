import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookInstance } from 'redux/auth/authOperations';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/getFetch',
  async (_, thunkAPI) => {
    try {
      const response = await phonebookInstance.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    console.log('phone :>> ', phone);
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
