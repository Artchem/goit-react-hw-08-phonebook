import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggenIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;