import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authLogIn, logOut, refreshAuth, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  isLoading: false,
  error: null,
};
const handelPending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshAuth.pending, state => {
        state.isRefreshingUser = true;
      })
      .addCase(refreshAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshingUser = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshAuth.rejected, state => {
        state.isRefreshingUser = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          authLogIn.pending,
          logOut.pending,
          refreshAuth.pending
        ),
        handelPending
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          authLogIn.rejected,
          logOut.rejected,
          refreshAuth.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
