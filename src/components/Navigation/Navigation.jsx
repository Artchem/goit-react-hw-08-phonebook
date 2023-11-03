import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledNav, StyledNavLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn  Navigation :>> ', isLoggedIn);
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      </StyledNav>
    </>
  );
}

export default Navigation;
