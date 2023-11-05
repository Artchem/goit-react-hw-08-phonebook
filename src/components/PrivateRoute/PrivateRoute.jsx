import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshingUser,
} from 'redux/auth/authSelectors';

export default function PrivateRoute({ children, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const IsRefreshingUser = useSelector(selectIsRefreshingUser);
  return isLoggedIn && !IsRefreshingUser ? (
    children
  ) : (
    <Navigate to={redirectTo} replace />
  );
}
