import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledHeader } from './AppBar.styled';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn :>> ', isLoggedIn);
  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}

export default AppBar;
