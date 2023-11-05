export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export const selectAuthError = state => state.auth.error;
export const selectAuthLoading = state => state.auth.isLoading;
