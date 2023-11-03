import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookInstance } from 'redux/auth/authOperations';

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
  async ({ name, number }, thunkAPI) => {
    console.log('phone :>> ', number);
    try {
      const response = await phonebookInstance.post('/contacts', {
        name,
        number,
      });
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
      const response = await phonebookInstance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
