import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log('register credentials:>> ', credentials);
      const response = await phonebookInstance.post(
        '/users/signup',
        credentials
      );
      // console.log('response.data :>> ', response.data);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // console.log('logIn credentials:>> ', credentials);
      const response = await phonebookInstance.post(
        '/users/login',
        credentials
      );
      setToken(response.data.token);
      console.log('response.data.token :>> ', response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await phonebookInstance.post('/users/logout');
    setToken('');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshAuth = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log('state :>> ', state);
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }
    setToken(persistedToken);
    try {
      const response = await phonebookInstance.get('/users/current');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) return false;
      return true;
    },
  }
);
